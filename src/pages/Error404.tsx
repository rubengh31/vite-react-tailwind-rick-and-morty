import { Button, Span, Title } from '@/components';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Title type="h2" className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <Span className="sr-only">Error404</Span>
            </Title>
            <Span className="block text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</Span>
            <Span className="block mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</Span>
            <Link to={`/login`}>
              <Button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
