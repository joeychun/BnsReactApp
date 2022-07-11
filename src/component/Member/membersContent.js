import React from 'react';
import MembersRow from './membersRow';
import AllMembers from '../../content/Members.json';

const MembersContent = () => {
    const SortedMembers = AllMembers.sort((a, b) => { // Alphabetically sorts AllMembers, by name
        a.name.localeCompare(b.name)
    })
    console.log(SortedMembers);

    let MembersInThree = [];
    for (let i = 0; i < SortedMembers.length; ++i) {
        if (i % 3 == 0) {
            MembersInThree.push([]);
        }
        MembersInThree[Math.floor(i / 3)].push(SortedMembers[i]);
    }

    const AllMemberContainers = MembersInThree.map((threeMemList, ind) => {
        return (
            <MembersRow key={ind} infoList={threeMemList} />
        );
    })
    return (
        <div>
            {AllMemberContainers}
        </div>
    )
}

export default MembersContent
