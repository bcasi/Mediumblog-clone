export const FollowingSection = ({ tabName, render }) => {
  if (tabName === 'following') return <div>{render()}</div>;
};
