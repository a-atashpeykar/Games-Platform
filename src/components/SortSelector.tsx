import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDoubleDown} from "react-icons/all";

interface Props {
    onSelectSortOrder : (sortOrder: string) => void;
    sortOrder : string;
}
export default function SortSelector( { onSelectSortOrder,sortOrder }: Props) {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
                    Order by: {currentSortOrder?.label || 'Relevance'}
                </MenuButton>
                <MenuList>
                    { sortOrders.map((order) =>
                        <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                            {order.label}
                        </MenuItem>
                    )}

                </MenuList>
            </Menu>
        </>
    )
}