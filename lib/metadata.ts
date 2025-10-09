// Metadata fetching utilities
interface MetaData {
  title: string;
  description: string;
}

export async function getHomePageMetadata(): Promise<MetaData> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (!API_BASE_URL) {
    console.error('API_BASE_URL not found in environment variables');
    return {
      title: 'Traumafrei I Finde innere Fülle, Freude und Vertrauen',
      description: 'Löse alte Traumata und öffne dich für Vertrauen, Freude & Fülle mit Harmonyum Trauma Release® – deine Brücke ins goldene Zeitalter.'
    };
  }

  const API_URL = `${API_BASE_URL}/api/pages/68be7cf2bf64c36803556acb?depth=2&draft=false&locale=undefined&trash=false`;

  try {
    console.log('🔍 Fetching metadata from:', API_URL);
    
    const response = await fetch(API_URL, {
      cache: 'no-store', // Don't cache during development for testing
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('📦 Raw API response:', JSON.stringify(data, null, 2));
    
    // Extract metadata from API response
    const metaLocale = data?.meta?.locales?.find((locale: any) => locale.locale === 'de') || data?.meta?.locales?.[0];
    console.log('🏷️ Found meta locale:', metaLocale);
    
    const metadata: MetaData = {
      title: metaLocale?.title || data?.title || 'Traumafrei I Finde innere Fülle, Freude und Vertrauen',
      description: metaLocale?.description || data?.description || 'Löse alte Traumata und öffne dich für Vertrauen, Freude & Fülle mit Harmonyum Trauma Release® – deine Brücke ins goldene Zeitalter.'
    };

    console.log('✅ Final metadata:', metadata);
    return metadata;

  } catch (error) {
    console.error('❌ Error fetching homepage metadata:', error);
    
    // Return fallback metadata if API fails
    return {
      title: 'Traumafrei I Finde innere Fülle, Freude und Vertrauen',
      description: 'Löse alte Traumata und öffne dich für Vertrauen, Freude & Fülle mit Harmonyum Trauma Release® – deine Brücke ins goldene Zeitalter.'
    };
  }
}

// Function to refresh cached metadata (removed caching for now)
export function clearMetadataCache() {
  // No caching currently implemented
}