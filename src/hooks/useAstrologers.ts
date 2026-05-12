import { useState, useEffect } from 'react';
import { astrologerService, Astrologer } from '../services/astrologerService';

export function useAstrologers() {
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAstrologers() {
      try {
        setLoading(true);
        const data = await astrologerService.getAstrologers();
        setAstrologers(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch astrologers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAstrologers();
  }, []);

  return { astrologers, loading, error };
}
