import { useContext, useState } from 'react';
import { SlPlus } from 'react-icons/sl';
import { PublishContext } from '../../contexts/publishPostContext';

export const AddPost = () => {
  const { title, content, setTitle, setContent } = useContext(PublishContext);
  return (
    <div className="flex w-[90%] px-5 m-10 gap-8 dark:bg-slate-900 ">
      <div className="h-[56px] ml-5">
        <SlPlus style={{ width: '35px', height: '35px', color: '#cbd5e1' }} />
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className="outline-none w-[600px] font-mono font-bold text-4xl dark:bg-slate-900 dark:text-neutral-50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="txtArea"
          rows="150"
          cols="15"
          placeholder="Tell your story...."
          className="font-sans text-2xl outline-none resize-none scroll-m-0  dark:bg-slate-900 dark:text-neutral-50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
