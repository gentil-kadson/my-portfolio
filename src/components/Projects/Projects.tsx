import { Flex, Heading } from "@chakra-ui/react"
import Project from "./Project"

import bot from "../../assets/bot.png"
import chat from "../../assets/chat.png"
import meetup from "../../assets/meetup.png"
import receipt from "../../assets/receipt.png"
import toDo from "../../assets/to-do.png"


const Projects = () => {
    return(
        <>
            <Heading>My Public Projects</Heading>
            <Flex bg="gray.300" w="full" h="fit-content" padding={10} borderRadius="10px" justifyContent="flex-start" flexWrap="wrap" flexBasis="600px" gap="20px">
                <Project  background="teal.100"  name="SmallTalk" image={chat} link="https://github.com/gentil-eilison/smallTalk" description="SmallTalk is an online platform designed to let its users schedule free video calls with other language learners." />
                
                <Project background="#858585" name="To Do List" image={toDo} link="https://github.com/gentil-kadson/todo-list" description="A simple To Do list where you can add and remove tasks." />
                
                <Project background="green.200" name="Receipt Data Analyser" image={receipt} link="https://github.com/gentil-kadson/desafio-front-end" description="A receipt analyser from the company costumers - you can see details on tables and charts."/>

                <Project background="yellow.200" name="MeetUp Demo" image={meetup} link="https://github.com/gentil-kadson/meetup-demo" description="A meetup creater and organizer. You can add meetups to favorites for faster access."/>

                <Project background="#858585" name="PyMate" image={bot} link="https://github.com/gentil-eilison/PyMate" description="A library for web scraping all kinds of data on the internet in a fast and effective way - includes CAPTCHA solver." />

            </Flex>
        </>
        
    );
}

export default Projects; 