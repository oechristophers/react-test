import Image from 'next/image'
import React from 'react'

export default function Remote() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1671726203454-5d7a5370a9f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJuYXRpaW9uYWwlMjBzdHVkZW50fGVufDB8fDB8fHww"
        alt="One" width={600} height={700}
      />
    </div>
  );
}
