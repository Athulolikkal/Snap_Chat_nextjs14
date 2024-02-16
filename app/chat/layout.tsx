import ChatSidebar from "@/components/chat/chat-sidebar";
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex h-screen">
      <ChatSidebar />
      {children}
    </main>
  );
};

export default Layout;
