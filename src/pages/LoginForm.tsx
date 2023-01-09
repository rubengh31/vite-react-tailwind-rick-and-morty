import { useState } from 'react';
import { Button, GenericInput, Image, Form, Title, Span } from '@/components';
import loginImage from '../assets/images/react.svg';
import base64 from 'base-64';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Implement login function here
    // email: 'superman@gmail.com',
    // password: '123456'

    const body = {
      email: email,
      password: password
    };

    fetch('https://apingweb.com/api/login', {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + base64.encode('admin : 12345'),
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message) {
          setErrorMessage(result.message);
        }
      })
      .catch((error) => {});
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-8 h-8 mr-2" src={loginImage} />
          <Title type="h1" title="Ricky & Morty" />
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Title
              type="h1"
              title="Sign in to your account"
              className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            />
            <Form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <GenericInput
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event: any) => setEmail(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <GenericInput
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(event: any) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between">
                {errorMessage && <Span className="text-red-900 text-xs">{errorMessage}</Span>}
              </div>

              <Button className="w-full text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
