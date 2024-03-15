'use client'
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// export default function NavbarItem({ title, param }: any) {
//    const searchParams = useSearchParams()
//    const genre = searchParams.get('genre')
//    return (
//       <div>
//          <Link
//             className={`hover:text-amber-600 font-semibold
//             ${genre === param
//                &&
//                'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
//                }`}
//             href={`/?genre=${param}`}>{title}</Link>
//       </div>
//    )
// }



// NavbarItem.js
import React from 'react';
import Link from "next/link";
import { Suspense } from 'react'; // Import Suspense
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }: any) {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <NavbarItemContent title={title} param={param} />
      </Suspense>
   );
}

function NavbarItemContent({ title, param }: any) {
   const searchParams = useSearchParams();
   const genre = searchParams.get('genre');

   return (
      <div>
         <Link
            className={`hover:text-amber-600 font-semibold
            ${genre === param
               &&
               'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
               }`}
            href={`/?genre=${param}`}
         >
            {title}
         </Link>
      </div>
   );
}
