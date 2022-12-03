import './myJob.css';
import { Divider } from '@mui/material';
import { format } from 'timeago.js';

export default function MyJob() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='card'>
      <h1>My Jobs</h1>
      {user.data.jobs.map((job) => (
        <div className='top'>
          <h2>{job.title}</h2>
          <div className='conta'>
            <div
              style={{
                backgroundImage: `url(http://localhost:6969/img/job/${job.coverImage})`,
              }}
              className='inner'
            ></div>
            <div className='des'>
              <h4>Type:{job.types}</h4>
              <p>Description:{job.description}</p>
              <p>Price:{job.price}</p>
              <p>Time:{format(job.createdAt)}</p>
              <p>City:{job.city}</p>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}
