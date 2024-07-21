import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            });
            response.cookies.set({
              name,
              value,
              ...options,
            });
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: "",
              ...options,
            });
            response.cookies.set({
              name,
              value: "",
              ...options,
            });
          },
        },
      },
    );

    const { data: { user } } = await supabase.auth.getUser();
    const userUid = user?.id;

    console.log("userUid", userUid);

    if (!user) {
      console.log("유저없음");
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (userUid !== 'ebc615e5-ec11-4f7b-b923-6faa35e26b8d') {
      console.log("유저 UID가 일치하지 않음");
      return NextResponse.redirect(new URL('/', request.url));
    }

    response.cookies.set('user-uid', userUid!, { path: '/' });
    
    return response;
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
