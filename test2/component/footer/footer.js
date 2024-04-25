"use client";

import { Footer } from "flowbite-react";


export function NewFooter() {
  return (
    <Footer container className="w-full flex mx-auto mt-6">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src="https://i.imgur.com/e1ISMU9.png"
            alt="RPIXplore logo"
            name="RPIXplore"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="https://github.com/bezerg04/RPIXplore">Github</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="RPIXplore" year={2024} />
      </div>
    </Footer>
  );
}
