// Metadata fetching utilities
const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68be7cf2bf64c36803556acb?depth=2&draft=false&locale=undefined&trash=false`;

interface MetaData {
  title: string;
  description: string;
}

// Cache the metadata to avoid repeated API calls
let cachedMetadata: MetaData | null = null;

export async function getHomePageMetadata(): Promise<MetaData> {
  // Return cached data if available
  if (cachedMetadata) {
    return cachedMetadata;
  }

  try {
    const response = await fetch(API_URL, {
      cache: 'force-cache', // Cache for better performance
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract metadata from API response
    const metaLocale = data?.meta?.locales?.find((locale: any) => locale.locale === 'de') || data?.meta?.locales?.[0];
    
    const metadata: MetaData = {
      title: metaLocale?.title || '',
      description: metaLocale?.description || ''
    };

    // Cache the result
    cachedMetadata = metadata;
    return metadata;

  } catch (error) {
    console.error('Error fetching homepage metadata:', error);
    
    // Return fallback metadata if API fails
    return {
      title: '',
      description: ''
    };
  }
}

// Function to refresh cached metadata
export function clearMetadataCache() {
  cachedMetadata = null;
}