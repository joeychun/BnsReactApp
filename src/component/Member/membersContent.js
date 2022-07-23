import React from 'react';
import MembersRow from './membersRow';
import AllMembers from '../../content/Members.json';
import NameSorter from '../../shared/SortComparer/nameCmp';

const MembersContent = () => {
    /*
    MembersContent receives all members' information (located in src/content), converts them into many 
    member rows that each contain three member cards (at least for desktop), and returns 
    appropriately styled JSX that displays those rows.
    ________________________________________

    AllMembers is formatted as such:
    [
        {
            "id": 1,
            "name": "Junseo Lee",
            "picture": "Junseo.png",
            "description": "Founder & Editor In Chief"
        },
        {
            "id": 2,
            "name": "Steven Kim",
            "picture": "Steven.jpeg",
            "description": "Founder & Chief Video Productions"
        },
        {
            "id": 3,
            "name": "Kris Son",
            "picture": "Kris.jpeg",
            "description": "Founder & Chief Public Relations"
        }
    ]
    */

    // Alphabetically sorts AllMembers, by name
    const SortedMembers = AllMembers.sort((a, b) => NameSorter(a.name, b.name))

    /* Randomizes Members (This method is unused.)
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
