import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";




const NavLink = styled.nav`
//  padding-right:500px;
 
}
`;

const HTitle = styled.h1`
// padding-right:500px;


}
`;
const HeaderTop = styled.header`

 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 5px solid #E3928B;
  border-radius: 5px;
  background-color: #EDE8DA;
  //  display: inline-block;
}
`;





export const Header = () => (
  <HeaderTop>
    <HTitle>
      <Link href="/">
        <a>Cats Blog</a>
      </Link>
    </HTitle>
    <NavLink>
        <Link  href="/posts">
          <a>Posts</a>
        </Link>
<Link  href="/">
          <a>Home</a>
        </Link>
    </NavLink>
  </HeaderTop>
);
