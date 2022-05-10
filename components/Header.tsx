import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect, createContext } from "react";
import styled from "styled-components";




const NavLink = styled.nav`

`;

const HTitle = styled.h1`

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
  <HeaderTop
  
       initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
  >
   
    <HTitle>
      <Link href="/">
        <a>Cats Blog</a>
      </Link>
    </HTitle>
    
    <NavLink>
        <Link  href="/">
          <a style={{margin:"0 2rem"}}>Home</a>
        </Link>
        <Link href="/posts">
          <a style={{margin:"0 2rem"}}>Posts</a>
        </Link>
    </NavLink>
  </HeaderTop>
);
