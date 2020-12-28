const groupsIds = [
    //  Group Ids
];

const fetch = require('node-fetch')

const reportGroup = (groupId) => {
    fetch("https://www.facebook.com/api/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,ar;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "sb=c1O2X9vt4eIA5iH2M-MPKhzp; datr=c1O2X22Gc5ck8P-Vah6rZsR0; c_user=100007003304778; dpr=2.5; spin=r.1003139782_b.trunk_t.1609193946_s.1_v.2_; xs=18%3Aky-zIch9K2ApFg%3A2%3A1607970651%3A10072%3A6612%3A%3AAcVfgurL-0KEZcjSNgZNk6gle86BGnszcdqQfdyKwg; fr=0moD2kfM9IBVGZpwy.AWVyS7ELnwUxxw2NDo7x_plLHXw.Bftk4n.oJ.F_e.0.0.Bf6lna.AWXZI069awo"
        },
        "referrer": "https://www.facebook.com/Abdelhammied/groups",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `av=100007003304778&__user=100007003304778&__a=1&__dyn=7AzHxqU5a5Q2m3mbG2KnFw9uu2i5U4e0yoW3q322aewXwnEbotwp8O2S1DwUx609vCxS320om78-0BE88628wgolzUO0-E4a3aUS2G2Caw9m8wsU9kbxSEtwi831wnEcUC68gwHwxwQzXxG1Pxi4UaEW2G1NxGm2SUnxq5olwUwHxm4-5pUfEe872dG5Ey2a2-&__csr=gngP2kh5han5Ehn6TOiOOZkBqjlqaHsBz4Z2BV4LEDFGqqBZ9tnXC9BqFlhrGmJeqCTimHQiXAXQA-9Gle8GqQqip3kjyGhaBp9lzfDGl3VeaAWhfQm8gC8LzZ7yyanUlyQ8yap94h7jnz9ucx52axJ3um58R5CBypVK7oKEy5uagGjABVUSdKEa4h1bKQ2qq5WwxU98jiKUiggx2cBwAx51K6qG4ovwUDxefzLwAK11yQ7VpE46mby8W22222PDxC3XBwIxSfx62q4eexa2-8yo0N6075Ecaho04S92UO8gO0Wod9EdUGmp3X4x901xi0gqp3Xxy9zFodGK5uiUg-5o7G3K681aEsxS0B8L82h0lFe9wTw2S86u0e6zU&__req=1j&__beoa=0&__pc=EXP2%3Acomet_pkg&dpr=3&__ccg=MODERATE&__rev=1003139782&__s=d10wdu%3A62cvr8%3A9nxwbr&__hsi=6911439520790955078-0&__comet_req=1&__comet_env=fb&fb_dtsg=AQHN4Pq5rrGb%3AAQG2t_WcwD3D&jazoest=22019&__spin_r=1003139782&__spin_b=trunk&__spin_t=1609194912&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useCIXNextScreenMutation&variables=%7B%22input%22%3A%7B%22frx_tag_selection_screen%22%3A%7B%22context%22%3A%22%7B%5C%22session_id%5C%22%3A%5C%223d6801fc-042e-445e-ac9d-22a29a41b27c%5C%22%2C%5C%22support_type%5C%22%3A%5C%22frx%5C%22%2C%5C%22type%5C%22%3A2%2C%5C%22story_location%5C%22%3A%5C%22group%5C%22%2C%5C%22entry_point%5C%22%3A%5C%22groups_report%5C%22%2C%5C%22reportable_ent_token%5C%22%3A%5C%22${groupId}%5C%22%7D%22%2C%22tags%22%3A%5B%22NUDITY_OR_SEXUAL_ACTIVITY%22%2C%22NUDITY_ADULT_NUDITY%22%5D%7D%2C%22actor_id%22%3A%22100007003304778%22%2C%22client_mutation_id%22%3A%223%22%7D%2C%22scale%22%3A3%7D&server_timestamps=true&doc_id=5291790704194709`,
        "method": "POST",
        "mode": "cors"
    }).then(res => {
        if (res.status === 200) { console.log(`${groupId} Has been reported for sexual nudity successfully.`) }
    });
}

const leaveGroup = (groupId) => {
    fetch("https://www.facebook.com/api/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,ar;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "sb=c1O2X9vt4eIA5iH2M-MPKhzp; datr=c1O2X22Gc5ck8P-Vah6rZsR0; c_user=100007003304778; dpr=2.5; spin=r.1003139782_b.trunk_t.1609193946_s.1_v.2_; xs=18%3Aky-zIch9K2ApFg%3A2%3A1607970651%3A10072%3A6612%3A%3AAcVfgurL-0KEZcjSNgZNk6gle86BGnszcdqQfdyKwg; fr=0moD2kfM9IBVGZpwy.AWVyS7ELnwUxxw2NDo7x_plLHXw.Bftk4n.oJ.F_e.0.0.Bf6lna.AWXZI069awo"
        },
        "referrer": "https://www.facebook.com/Abdelhammied/groups",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `av=100007003304778&__user=100007003304778&__a=1&__dyn=7AzHxqU5a5Q2m3mbG2KnFw9uu2i5U4e0yoW3q322aewXwnEbotwp8O2S1DwUx609vCxS320om78-0BE88628wgolzUO0-E4a3aUS2G2Caw9m8wsU9kbxSEtwi831wnEcUC68gwHwxwQzXxG1Pxi4UaEW2G1NxGm2SUnxq5olwUwHxm4-5pUfEe872dG5Ey2a2-&__csr=gngP2kh5han5Ehn6TOiOOZkBqjlqaHsBz4Z2BV4LEDFGqqBZ9tnXC9BqFlhrGmJeqCTimHQiXAXQA-9GlG8GqQqip3kjyGhaBp9lzfDGl3VeaAWhfQm8gC8LzZ7yyanUlyQ8yap94h7jnz9ucgggyErgTBxidhpFoCurxSbG8xnyAaAV9uudzrG2x4giXJ0CCxuE8u2i4QHK4A48gz9o98hgrxCGx67Ue9UjzUXU9bwgoJ1-mq11ByUyewwwwwIVUpw-Vob8tzUhwCx3zEiwLy8C0chw1Nq32Am01dygKcy4cweC3iq3uaBCg-N8ig0okw46Cg-UoyoWm3qHxnAK4fxm1WwXxy0iG78tw9ibO0Ag5qjyodU0Jy1Dw3xE-&__req=1s&__beoa=0&__pc=EXP2%3Acomet_pkg&dpr=3&__ccg=MODERATE&__rev=1003139782&__s=pdlk4y%3A62cvr8%3A9nxwbr&__hsi=6911439520790955078-0&__comet_req=1&__comet_env=fb&fb_dtsg=AQHN4Pq5rrGb%3AAQG2t_WcwD3D&jazoest=22019&__spin_r=1003139782&__spin_b=trunk&__spin_t=1609194912&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useExecuteNFXActionMutation&variables=%7B%22input%22%3A%7B%22context%22%3A%22%7B%5C%22session_id%5C%22%3A%5C%223d6801fc-042e-445e-ac9d-22a29a41b27c%5C%22%2C%5C%22support_type%5C%22%3A%5C%22frx%5C%22%2C%5C%22type%5C%22%3A2%2C%5C%22story_location%5C%22%3A%5C%22group%5C%22%2C%5C%22entry_point%5C%22%3A%5C%22groups_report%5C%22%2C%5C%22frx_report_action%5C%22%3A%5C%22DIRECT%5C%22%2C%5C%22rapid_reporting_tags%5C%22%3A%5B%5C%22nudity_or_sexual_activity%5C%22%2C%5C%22nudity_adult_nudity%5C%22%5D%2C%5C%22frx_feedback_submitted%5C%22%3Atrue%2C%5C%22reportable_ent_token%5C%22%3A%5C%22${groupId}%5C%22%7D%22%2C%22ixt_serialized_state%22%3A%22%22%2C%22type%22%3A%22LEAVE_GROUP%22%2C%22actor_id%22%3A%22100007003304778%22%2C%22client_mutation_id%22%3A%224%22%7D%2C%22scale%22%3A3%7D&server_timestamps=true&doc_id=3575149519245837`,
        "method": "POST",
        "mode": "cors"
    }).then(res => { if (res.status === 200) { console.log(`${groupId} Has been leaved successfully.`) } });
}


let index = 0;

// while (index <= 100) {
groupsIds.forEach(groupId => {
    reportGroup(groupId);

    leaveGroup(groupId);
})

//  /   index++
// }