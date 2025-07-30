
type Params = Promise<{slug: string}>;
export default  async function DashboardRoute({params}: {params: Params}) {
  const {slug} = await params;
    return (
   
    <div>Here is dynamic route {slug}</div>
  )
}
