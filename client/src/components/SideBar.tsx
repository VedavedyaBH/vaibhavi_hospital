import SideBarRow from "./SideBarRow";
import {
    UserIcon,
    RectangleStackIcon,
    PlusIcon,
    ClipboardDocumentListIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";

function SideBar({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const handleNavLinkClick = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <div className={`sidebar-container ${isOpen ? "open" : ""} `}>
                <div
                    onClick={() => {
                        onClose();
                    }}
                    className="flex justify-end pt-5 scale-75"
                >
                    <SideBarRow title={""} Icon={ArrowLeftIcon} />
                </div>
                <div className="rounded-lg p-4">
                    <div>
                        <div
                            onClick={() => {
                                onClose();
                                handleNavLinkClick("about");
                            }}
                        >
                            <SideBarRow title={"About"} Icon={UserIcon} />
                        </div>
                        <div
                            onClick={() => {
                                onClose();
                                handleNavLinkClick("gallery");
                            }}
                        >
                            <SideBarRow title={"Gallery"} Icon={PlusIcon} />
                        </div>
                        <div
                            onClick={() => {
                                onClose();
                                handleNavLinkClick("services");
                            }}
                        >
                            <SideBarRow
                                title={"Services"}
                                Icon={RectangleStackIcon}
                            />
                        </div>
                        <div
                            onClick={() => {
                                onClose();
                                handleNavLinkClick("docs");
                            }}
                        >
                            <SideBarRow
                                title={"Doctors"}
                                Icon={ClipboardDocumentListIcon}
                            />
                        </div>
                        <div
                            onClick={() => {
                                onClose();
                                handleNavLinkClick("contact");
                            }}
                        >
                            <SideBarRow
                                title={"Contact"}
                                Icon={ClipboardDocumentListIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
