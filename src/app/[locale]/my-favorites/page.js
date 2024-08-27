"use client";
import BaseLayout from "@/components/Layouts/BaseLayout";
import PropertyLists from "@/components/Lists/PropertyLists";
import useMyFavorites from "@/hooks/useMyFavorites";

export default function MyFavoritePage() {
  const { myFavorites } = useMyFavorites();
  return (
    <BaseLayout>
      <div className="custom-container space-y-3 md:space-y-12">
        <h1 className="font-bold text-lg md:text-2xl">My Favorite</h1>
        <PropertyLists properties={myFavorites} />
      </div>
    </BaseLayout>
  );
}
