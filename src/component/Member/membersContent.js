import React from 'react';
import MembersRow from './membersRow';
import AllMembers from '../../content/Members.json';
import NameSorter from '../../shared/SortComparer/nameCmp';

const MembersContent = () => {
    // Alphabetically sorts AllMembers, by name
    const SortedMembers = AllMembers.sort((a, b) => NameSorter(a.name, b.name))

    /* Randomizes Members (Unused method, at least for now)
    const SortedMembers = AllMembers
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value) */

    let MembersInThree = [];
    for (let i = 0; i < SortedMembers.length; ++i) {
        if (i % 3 === 0) {
            MembersInThree.push([]);
        }
        MembersInThree[Math.floor(i / 3)].push(SortedMembers[i]);
    }

    const AllMemberContainers = MembersInThree.map((threeMemList, ind) => {
        return (
            <MembersRow width={0.9} key={ind} infoList={threeMemList} />
        );
    })
    return (
        <div className="MemberContainers">
            {AllMemberContainers}
        </div>
    )
}

export default MembersContent
