// app/admin/page.tsx
import { cookies } from 'next/headers';
import {createClient} from '@/utils/supabase/server';
export default async function AdminPage() {
  const cookieStore = cookies();
  const userUid = cookieStore.get('user-uid')?.value;
  
  const supabase = createClient();
  const { data, error } = await supabase
    .from('data')
    .select('*');

  
  

  if (!userUid) {
    // Handle redirection or error if userUid is not available
    return (
      <div>
        <h1>Not Authorized</h1>
        <p>You need to be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>User UID: {userUid}</p>
      {data.map((item)=>(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}
