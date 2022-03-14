<script>
import TableRow from "./TableRow.svelte";
import TableHead from "./TableHead.svelte";

    let names = ["Bob","Bobby","Joe"];
    const hobbies = ["Fishing","Skateboarding","Gaming"];
    const age = ["23","66","17"];
    const cars = ["Toyota","Kia","Mazda"];
    
</script>

    <h1>Table:</h1>
<table>

    <tr>
        <th></th>
        {#each names as tableHead }
            <TableHead tableHead={tableHead}/>
        {/each}
    </tr>
    <tr>
        <td>Favourite Hobby:</td>
        {#each hobbies as tableRow }
                  <TableRow tableRow={tableRow}/>
        {/each}
    </tr>
    <tr>
        <td>Age:</td>
        {#each age as tableRow }
                  <TableRow tableRow={tableRow}/>
        {/each}
    </tr>
    <tr>
        <td>Favourite Car:</td>
        {#each cars as tableRow }
                  <TableRow tableRow={tableRow}/>
        {/each}
    </tr>
</table>