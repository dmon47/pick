import React, {useState} from 'react';
import {Card, Text} from 'react-native-elements';

interface OwnProps {}

const ContentsListPage: React.FC<OwnProps> = () => {
  const [lists, setLists] = useState([
    {title: 'aaa', description: 'description'},
    {title: 'aaa', description: 'description'},
  ]);

  return (
    <>
      {lists.map((list) => (
        <Card key={list.title}>
          <Text>{list.title}</Text>
          <Text>{list.description}</Text>
        </Card>
      ))}
    </>
  );
};

export default ContentsListPage;
