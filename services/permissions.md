# permissions


| users  | admin | user_admin | teacher | student |
|:------:|:-----:|:----------:|:-------:|:-------:|
| create |   ✅   |     ✅      |    ❌    |    ❌    |
|  read  |   ✅   |     ✅      |    ❌    |    ❌    |
| update |   ✅   |     ✅      |    ❌    |    ❌    |
| delete |   ✅   |     ❌      |    ❌    |    ❌    |


| classes | admin | user_admin | teacher | student |
|:-------:|:-----:|:----------:|:-------:|:-------:|
| create  |   ✅   |     ✅      |    ✅    |    ❌    |
|  read   |   ✅   |     ✅      |    ✅    |    ✅    |
| update  |   ✅   |     ✅      | `custom`  |    ❌    |
| delete  |   ✅   |     ✅      | `custom`  |    ❌    |



| courses | admin | user_admin | teacher | student |
|:-------:|:-----:|:----------:|:-------:|:-------:|
| create  |   ✅   |     ✅      |    ✅    |    ❌    |
|  read   |   ✅   |     ✅      |    ✅    |    ❌    |
| update  |   ✅   |     ✅      |    ✅    |    ❌    |
| delete  |   ✅   |     ✅      |    ❌    |    ❌    |

thinking about other

✅❌