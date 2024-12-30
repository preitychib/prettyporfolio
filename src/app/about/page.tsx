// export default function AboutPage() {
//     return (
//       <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//         <h1>About Me</h1>
//         <p>
//           Hi, I'm [Your Name]. I'm a [Your Role, e.g., Frontend Developer], passionate about creating
//           beautiful and functional web applications. I have expertise in [Your Skills/Technologies].
//         </p>
//       </section>
//     );
//   }
  
//   const Home: React.FC = () => {
//     useEffect(() => {}, []);
  
//     return (
//       <div
//         style={{
//           height: '100vh',
//           width: '100vw',
//           backgroundImage: 'url("/bg.png")',
//           backgroundSize: '150%',
//           backgroundPosition: 'center',
//           overflow: 'hidden',
//           position: 'relative',
//         }}
//       >
//         <img
//           src="/home1.png"
//           alt="Overlay Background"
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '100vh',
//             objectFit: 'cover',
//             zIndex: 11,
//           }}
//         />
  
//         <img
//           src="/nametag.png"
//           alt="Tittle background"
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '70vw',
//             height: 'auto',
//           }}
//         />
  
//         <img
//           src="/page1.png"
//           alt="Overlay Background"
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '100vh',
//             zIndex: 11,
//           }}
//         />
  
//         <img
//           src="/page3.png"
//           alt="Overlay Background"
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '100vh',
//             zIndex: 11,
//           }}
//         />
  
//         <img
//           src="/page4.png"
//           alt="Overlay Background"
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '100vh',
//             zIndex: 11,
//           }}
//         />
  
//         <img
//           src="/page2.png"
//           alt="Overlay Background"
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100vw',
//             height: '90vh',
//             zIndex: 11,
//           }}
//         />
//       </div>
//     );
//   };
  
//   export default Home;
  
"use client";
import { useHandleScroll } from '../../utils/handleScroll';
export default function AboutPage() {

  const handleScroll = useHandleScroll('/about');
  
    return (
      <div onWheel={handleScroll}>
        <img
          src="/page1.png"
          alt="Overlay Background"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 11,
          }}
        />
      </div>
    );
  }
  