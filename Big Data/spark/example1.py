from pyspark.sql import SparkSession

# Create a SparkSession
spark = SparkSession.builder.appName("SparkExample").getOrCreate()

# Create a DataFrame with numbers from 1 to 100 million
numbers = spark.range(1, 100000001)

# Calculate the sum of the numbers using the DataFrame API
sum_of_numbers = numbers.selectExpr("sum(id)").collect()[0][0]

# Print the result
print("Sum of numbers:", sum_of_numbers)

# Stop the SparkSession
spark.stop()
