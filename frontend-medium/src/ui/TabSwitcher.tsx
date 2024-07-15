import { createContext, useContext, useState } from 'react';

const TabContext = createContext({});

function TabSwitcher({ children }) {
  const [activeTabId, setActiveTabId] = useState('forYou');
  return (
    <TabContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabContext.Provider>
  );
}

function Tab({ id, children }) {
  const { activeTabId, setActiveTabId } = useContext(TabContext);
  const defaultClass =
    'border-b-2 border-slate-50 dark:border-slate-800 pb-[25px] text-slate-400 dark:text-slate-100 ';

  const isActiveClass =
    activeTabId === id
      ? 'border-b-2 border-slate-800 dark:border-slate-50 pb-[25px] text-1xl text-semibold dark:dark:text-slate-100'
      : 'border-b-2 border-slate-50 dark:border-slate-800 pb-[25px] text-slate-400 dark:text-slate-100';
  return (
    <div>
      <div className={isActiveClass} onClick={() => setActiveTabId(id)}>
        {children}
      </div>
    </div>
  );
}

function TabPanel({ whenActive, children }) {
  const { activeTabId } = useContext(TabContext);
  return (
    <div className="grid grid-cols-3 px-3 py-2 lg:px-10 lg:py-5 gap-4 md:gap-8 lg:gap-8 dark:bg-slate-900">
      {activeTabId === whenActive ? children : null}
    </div>
  );
}

export default TabSwitcher;
export { Tab, TabPanel };
