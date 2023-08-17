import './globals.css';
import Navbar from '@/components/Navbar';
import { MeaningProvider } from '@/context/MeaningsContext';

export const metadata = {
  title: 'Suvaye Dictionary',
  description: 'best dictionary',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen bg-white p-4 md:px-0'>
        <Navbar />
        <MeaningProvider>
          <div className='max-w-4xl mx-auto mt-10'>{children}</div>
        </MeaningProvider>
      </body>
    </html>
  );
}
