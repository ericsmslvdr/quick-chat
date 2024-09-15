import { ContentLayout } from "@components/layouts";
import CreateUserForm from "@features/auth/components/create-user-form";

function HomeRoute() {
    return (
        <ContentLayout>
            <div className="m-auto">
                <h1 className="text-4xl font-bold">Quick Chat</h1>
                <hr className="my-2" />
                <p>Welcome to Quick Chat! <br />Please enter your information to get started.</p>
                <br />
                <CreateUserForm />
            </div>
        </ContentLayout>
    );
}

export default HomeRoute;