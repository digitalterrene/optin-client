import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion
        open={open === 1}
        className={`mb-2 rounded-lg   ${
          open === 1 ? "bg-gray-100 " : ""
        } border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-black hover:!text-blue-700" : ""
          }`}>
          <div className="flex w-full justify-between">
            Can I cancel at anytime?
            {open === 1 ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className={`mb-2 rounded-lg   ${
          open === 2 ? "bg-gray-100 " : ""
        } border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-black hover:!text-blue-700" : ""
          }`}>
          <div className="flex w-full justify-between">
            My team has credits. How do we use them?
            {open === 2 ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className={`mb-2 rounded-lg   ${
          open === 3 ? "bg-gray-100 " : ""
        } border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-black hover:!text-blue-700" : ""
          }`}>
          <div className="flex w-full justify-between">
            {" "}
            How does Preline's pricing work?{" "}
            {open === 3 ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className={`mb-2 rounded-lg   ${
          open === 4 ? "bg-gray-100 " : ""
        } border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-black hover:!text-blue-700" : ""
          }`}>
          <div className="flex w-full justify-between">
            How do i upgrade my plan?{" "}
            {open === 4 ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
