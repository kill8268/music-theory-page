import { SWRConfig } from "swr";
import lazy from "@/hoc/lazy.hoc";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/assets/styles/index";

const createRouter = (router) => {
  const { path, element } = router;
  const Element = element && lazy(element);
  return {
    path,
    element: element && <Element />,
    children: router.children?.map((child) => createRouter(child)),
  };
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig
    value={{
      revalidateOnReconnect: false, // 禁止网络重新连接时重新获取数据
      shouldRetryOnError: false, // 禁止错误重试
      revalidateOnFocus: false, // 禁止窗口聚焦时重新获取数据
    }}
  >
    <RouterProvider router={createBrowserRouter(__routes.map(createRouter))} />
  </SWRConfig>,
);
