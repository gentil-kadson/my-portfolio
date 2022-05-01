import { Flex } from "@chakra-ui/react"
import StatsItem from "./StatsItem";
import IFRN from "../../assets/ifrn-logo.png"

const Stats = () => {
    return(
        <Flex flexDirection="row" justifyContent="space-between">
            <StatsItem title="6" content="Projects including Python and ReactJS." />
            <StatsItem image={IFRN} content="is the institution I attended high school and am currently graduating." />
            <StatsItem title="+2" content="Years of experience with web-development, and I'm currently taking part in many projects at my college, which involves web-development!" />
        </Flex>
    );  
}

export default Stats 