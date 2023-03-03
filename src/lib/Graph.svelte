
<script>
    import Chart from 'svelte-frappe-charts';
    // once we have data coming from somewhere:
    // let data    // this requires a property when making an instance of the component

    let data = {
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          values: [10, 12, 3, 9, 8, 15, 9]
        }
      ]
    };
</script>
  
<Chart data={data} type="line" />

