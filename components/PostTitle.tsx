import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
};

const PostTitle = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [postNumber, setPostNumber] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postNumber]);

  return (
    <div className='flex gap-2'>
      <input
        type='number'
        min={1}
        max={100}
        value={postNumber}
        onChange={(e) => setPostNumber(Number(e.target.value))}
      />
      <div className='inline-block max-w-48 overflow-hidden align-top whitespace-nowrap text-ellipsis'>
        <span>{post?.title}</span>
      </div>
    </div>
  );
};
export default PostTitle;
