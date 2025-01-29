```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  //Added check to handle potential asynchronous issues
if(session && session.user){
  // Access user data from session
  console.log('Session:', session);

  // Your API route logic here
  res.status(200).json({ message: 'Success', user: session.user });
} else {
  return res.status(500).json({ message: 'Session error' });
}
}
```