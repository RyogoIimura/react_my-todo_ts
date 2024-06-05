import { Box, Button, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export const NewTasks = () => {

  // 分割代入
  // const {
  // } = props;

  return (
    <>
      <Box border='1px' px={8} py={5} mt={5} rounded={10} >
        <UnorderedList styleType="''" ml={0}>
          <ListItem>
            <Heading as='h3' size='md' noOfLines={1} mt={5}>
              タイトル :
            </Heading>
          </ListItem>
          <ListItem>
            <Heading as='h3' size='md' noOfLines={1} mt={5}>
              作成日 :
            </Heading>
          </ListItem>
          <ListItem>
            <Heading as='h3' size='md' noOfLines={1} mt={5}>
              期日 :
            </Heading>
          </ListItem>
          <ListItem>
            <Heading as='h3' size='md' noOfLines={1} mt={5}>
              ステータス :
            </Heading>
          </ListItem>
          <ListItem>
            <Heading as='h3' size='md' noOfLines={1} mt={5}>
              内容 :
            </Heading>
          </ListItem>
        </UnorderedList>
        <Box
          display='flex'
          justifyContent='center'
          mt={10}
        >
          <Button
          >
            Edit
          </Button>
          <Button
            ml={5}
          >
            Discontinued
          </Button>
        </Box>
      </Box>
    </>
  );
}
