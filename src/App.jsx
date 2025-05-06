import AppRoutes from "./routes/AppRoutes"
const App = () => {
  return (
    <div className="h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          React App Starter
        </h1>
        <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Button from ShadCn</Button>
        <MUIButton>Button from MUI</MUIButton>
        <MUIButton variant="contained">Contained</MUIButton>
        <div class="bg-primary-blue-500 text-5xl font-bold">
      Hello Tailwind
        </div>
      </div>
    </div>
  );
}
