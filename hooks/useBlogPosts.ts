import { useEffect, useState } from "react";

interface Post {
  slug?: string;
  title?: string;
  description?: string;
  publishedAt?: string;
  heroImage?: any;
  likes?: number;
  comments?: number;
  populatedAuthors?: any[];
  image?: any;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"}/api/posts?depth=2&draft=false&locale=undefined&trash=false`;

// Helper function to transform image URLs
const transformImageUrl = (url: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
  if (!url) return url;
  if (url.startsWith('http')) return url;
  return `${baseUrl}${url}`;
};

// Helper function to transform post images
const transformPostImages = (post: any) => {
  if (post.heroImage?.url) {
    post.heroImage.url = transformImageUrl(post.heroImage.url);
  }
  if (post.heroImage?.sizes) {
    Object.keys(post.heroImage.sizes).forEach(size => {
      if (post.heroImage.sizes[size]?.url) {
        post.heroImage.sizes[size].url = transformImageUrl(post.heroImage.sizes[size].url);
      }
    });
  }
  if (post.image?.url) {
    post.image.url = transformImageUrl(post.image.url);
  }
  return post;
};

// Singleton pattern to store the data globally
let cachedPosts: Post[] | null = null;
let isLoading = false;
let subscribers: Array<(posts: Post[], loading: boolean, error: string | null) => void> = [];

const fetchPosts = async () => {
  if (isLoading || cachedPosts !== null) return;
  
  isLoading = true;
  notifySubscribers(cachedPosts || [], true, null);
  
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const docs = Array.isArray(json?.docs) ? json.docs : Array.isArray(json) ? json : [];
    
    // Sort by date - latest first
    const sortedDocs = docs.sort((a: any, b: any) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA; // Latest first (descending order)
    }).map(transformPostImages); // Transform image URLs
    
    cachedPosts = sortedDocs as Post[];
    notifySubscribers(cachedPosts, false, null);
  } catch (error: any) {
    notifySubscribers([], false, error.message || 'Fehler beim Laden');
  } finally {
    isLoading = false;
  }
};

const notifySubscribers = (posts: Post[], loading: boolean, error: string | null) => {
  subscribers.forEach(callback => callback(posts, loading, error));
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>(cachedPosts || []);
  const [loading, setLoading] = useState(cachedPosts === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const callback = (newPosts: Post[], newLoading: boolean, newError: string | null) => {
      setPosts(newPosts);
      setLoading(newLoading);
      setError(newError);
    };
    
    subscribers.push(callback);
    
    // Fetch posts if not already cached
    if (cachedPosts === null && !isLoading) {
      fetchPosts();
    }
    
    return () => {
      const index = subscribers.indexOf(callback);
      if (index > -1) {
        subscribers.splice(index, 1);
      }
    };
  }, []);

  return { posts, loading, error };
};

// Function to manually refresh posts
export const refreshBlogPosts = () => {
  cachedPosts = null;
  fetchPosts();
};