import { Link, Route, Routes } from 'react-router-dom';
import ProtectedRouter from './components/ProtectedRouter';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/List/Detail';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import User from './pages/User';

// 所有的Route需要包含在Routes节点内

function App() {
  return (
    <div className='App'>
      <Link to='/'>【首页】</Link>
      <Link to='/list'>【列表】</Link>
      <Link to='/about'>【关于】</Link>
      <Link to='/user'>【我的】</Link>
      <hr />
      <Routes>
        {/* element属性用来表示我们当前地址展示的组件内容 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/list/:id' element={<Detail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route
          path='/user/*'
          element={
            <ProtectedRouter>
              <User />
            </ProtectedRouter>
          }
        ></Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
