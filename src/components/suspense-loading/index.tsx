import React, { FC, memo, ReactElement, Suspense } from 'react';

interface IProps {
  children: ReactElement;
}

const Index: FC<IProps> = ({ children }) => (
  <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
);

export default memo(Index);
