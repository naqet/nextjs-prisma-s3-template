import prisma from "@/lib/prisma";

export default async function Home() {
    const users = await prisma.user.findMany();
    return (
        <div className="p-4">
            {users.map((user) => (
                <div className="bg-red-900">{user.name}</div>
            ))}
        </div>
    );
}
