import { useProfile } from '@/api/useProfile';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function PersonalInformation() {
const { data } = useProfile()
  return (
    <main className="h-[calc(100vh-100px)] flex items-center justify-center ">
      <section className="container py-4 flex flex-col justify-center border border-border-g2 rounded-md space-y-4 w-full max-w-lg">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-semibold">
          personal information{" "}
        </h1>

        <div className="">
  {data && (
  <div className="space-y-3">
    <div className="space-y-2">
      <Label>Name</Label>
    <Input placeholder={data.data.user.name} />
    </div>
 <div className="space-y-2">
    <Label>Email</Label>
    <Input placeholder={data.data.user.email} /> </div>

 <div className="space-y-2">
    <Label>Email Verified At</Label>
    <Input placeholder={data.data.user.email_verified_at } /> </div>

 <div className="space-y-2">
  <Label>Member Since</Label>
    <Input placeholder={data.data.stats.member_since} /> </div>

 <div className="space-y-2">
    <Label>Total Reviews</Label>
    <Input placeholder={String(data.data.stats.total_reviews)} />
    </div>
     </div>
)}
  </div>
      </section>
    </main>
  );
}

