import { useRouter } from 'next/router';

import PageLayout from '@/layouts';

const Index = () => {
  const router = useRouter();

  return (
    <PageLayout
    // meta={
    //   <Meta
    //     title="Next.js Boilerplate Presentation"
    //     description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
    //   />
    // }
    >
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
    </PageLayout>
  );
};

export default Index;
