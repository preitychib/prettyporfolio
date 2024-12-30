import { useRouter } from 'next/navigation';

const pages = ['/', '/about','/education']; 

export function useHandleScroll(currentPage: string) {
  const router = useRouter();

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const currentIndex = pages.indexOf(currentPage);

    if (currentIndex === -1) return; 

    if (e.deltaY > 0) {
      const nextPage = (currentIndex + 1) % pages.length; 
      router.push(pages[nextPage]);
    } else if (e.deltaY < 0) {
      const prevPage = (currentIndex - 1 + pages.length) % pages.length; 
      router.push(pages[prevPage]);
    }
  };

  return handleScroll;
}

