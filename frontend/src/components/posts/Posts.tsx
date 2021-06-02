import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/posts/Post.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type D = {
  id: string;
  content: string;
  title: string;
  created_at: number;
  updated_at: number;
};

const Posts: React.FC = () => {
  const [postsData, setPostsData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
  }, []);

  return (
    <div>
      <h1>こんにちは</h1>
      {postsData &&
        postsData.map((data: D) => (
          <Card className="post-card" variant="outlined" key={data.id}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                {data.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default Posts;
