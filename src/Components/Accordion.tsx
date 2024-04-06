import { useState } from "react";
import styled from "styled-components";

export interface AccordionItemProps {
    title : string;
    content : string;
}

export interface AccordionProps {
    $items : AccordionItemProps[];
}

const AccordionBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    font-family: Arial, sans-serif;
`;

const AccordionHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    font-size: 16px;
    font-family: Arial, sans-serif;
`;

const AccordionContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    font-family: Arial, sans-serif;
    margin-bottom: 13px;
`;

function AccordionItemComponent({content, title} : AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <AccordionHeader onClick={() => setIsOpen(!isOpen)}><p>{title}</p><span>X</span></AccordionHeader>
            {isOpen && <AccordionContent>{content}</AccordionContent>}
        </div>
    )
}

const AccordionItem = styled(AccordionItemComponent)`
    padding-bottom: 30px;
`

const Accordion = ({$items} : AccordionProps) => {
    return (
        <AccordionBox>
            {$items.map((item, index) => <AccordionItem key={index} title={item.title} content={item.content} />)}
        </AccordionBox>
    )
}

export default Accordion;