import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer container mx-auto drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content py-5 pl-8 pr-5"><label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label><h2 className="text-5xl text-center text-primary py-5">DashBoard</h2>
                <Outlet></Outlet>
                <div><div className="flex text-center justify-center items-center text-primary py-5 font-bold uppercase"><hr className="ml-3 border-[1px]  border-primary w-8 mr-3" /><p className="text-center text-secondary">My Orders</p><hr className="ml-3 border-[1px]  border-primary w-8 " /></div><div className="overflow-x-auto"><table className="table table-zebra w-full"><thead><tr><th>Item Name</th><th>Quantity</th><th>Status</th><th>Price</th><th>Payment</th><th>Controls</th></tr></thead><tbody> </tbody></table></div></div></div>
            <div className="drawer-side bg-gray-100"><label for="my-drawer-2" className="drawer-overlay"></label><ul className="menu p-4 overflow-y-auto w-48 bg-gray-200 text-base-content"><li className="btn btn-primary my-1.5"><a href="/dashboard">DashBoard</a></li><li className="btn btn-primary my-1.5"><a href="/dashboard/review">Review</a></li></ul></div></div>
    );
};

export default Dashboard;