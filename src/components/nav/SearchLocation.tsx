import { LuSearch } from "react-icons/lu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
const SearchLocation = () => {
  return (
    <div className="w-[50%]">
      <InputGroup className="search_location_group w-full rounded-3xl border-none bg-[#1e1e1c] px-5 py-6">
        <InputGroupInput placeholder="Search City" className="text-xl" />
        <InputGroupAddon>
          <LuSearch />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchLocation;
