import Head from 'next/head';
import Header from '@/components/Header';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth-slice';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (!user) return;
    dispatch(authActions.setUser(user));
    dispatch(authActions.setIsAuthenticated(true));
    router.push('/play');
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
      </main>
    </>
  );
}
