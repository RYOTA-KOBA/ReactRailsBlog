import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/posts/Post.css';
import ThreeDotMenu from '../atoms/ThreeDotMenu';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    alignItems: 'center',
    display: 'flex',
  },
});

type D = {
  id: string;
  content: string;
  title: string;
  created_at: number;
  updated_at: number;
  uid: number;
};

type P = {
  title: string;
  content: string;
  id: string;
  created_at: string;
  updated_at: string;
};

const Posts: React.FC = () => {
  const [postsData, setPostsData] = useState<P[]>([]);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        const posts: P[] = [];
        res.data.forEach((d: D) => {
          const date = new Date(d.created_at);
          const Day = date.toLocaleDateString('ja-JP');
          const Time = date.toLocaleTimeString('ja-JP');

          //仮置き。後で関数にする
          const date2 = new Date(d.updated_at);
          const Day2 = date2.toLocaleDateString('ja-JP');
          const Time2 = date.toLocaleTimeString('ja-JP');

          //uidからaxiosでusersにアクセスしてusernameを取得しpostsのスキーマに持たせる

          posts.push({
            title: d.title,
            content: d.content,
            id: d.id,
            created_at: Day + ' ' + Time,
            updated_at: Day2 + ' ' + Time2,
          });
        });
        setPostsData(posts);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
  }, []);

  return (
    <div className="posts-wrapper">
      <div className="posts-header">
        <h1>Posts</h1>
        <div className="posts-sort-btn-wrapper">
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
          </BottomNavigation>
        </div>
      </div>
      {postsData &&
        postsData.map((data: P) => (
          <Card className="post-card" variant="outlined" key={data.id}>
            <CardContent>
              <div className="post-card-head">
                <Typography
                  variant="h5"
                  component="h2"
                  className="post-card-head-title">
                  {data.title}
                </Typography>
                <ThreeDotMenu key={data.id} id={data.id} />
              </div>
              <Typography className={classes.pos} color="textSecondary">
                <EventAvailableIcon style={{ fontSize: '1.3rem' }} />
                {data.created_at}
              </Typography>
              {data.created_at !== data.updated_at && (
                <Typography className={classes.pos} color="textSecondary">
                  <ReplayIcon style={{ fontSize: '1.3rem' }} />
                  {data.updated_at}
                </Typography>
              )}
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
