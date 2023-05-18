import Layout from "~/components/Layout/Layout";
import HomePageSlices from "~/slices/HomePage/HomePageSlices";
import type {V2_MetaFunction} from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
    return [{title: "Canvas Studio Website V4"}];
};

export default function _index() {
    // TODO: Fetch and create the slice machine

    return (
        <Layout>
            <HomePageSlices/>
        </Layout>
    );
}
